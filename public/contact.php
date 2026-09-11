<?php
/**
 * Contact form handler for Crazy Domains / shared PHP hosting.
 *
 * Phone-first: enquiries succeed even when CONTACT_TO_EMAIL is empty.
 * Owner: set CONTACT_TO_EMAIL to a real inbox when available (not shown in UI).
 * Some hosts disable PHP mail() — ask the host about SMTP if mail never arrives.
 *
 * Redirects use the directory of this script so the same file works under
 * /JINISmarthome/ (GitHub Pages) or /new_home/ (Crazy Domains) without edits.
 */

// ========== CONFIG — owner edit only (not shown on the website) ==========
// Leave empty for phone-first mode (no mail attempt). Set when an inbox is ready.
define('CONTACT_TO_EMAIL', '');
define('CONTACT_FROM_EMAIL', 'noreply@jinitech.com.au'); // optional From when mailing
define('CONTACT_SUBJECT', 'JINI Smart Home — website enquiry');
// ========================================================================

header('X-Content-Type-Options: nosniff');

/** Base path of this script (e.g. /new_home or /JINISmarthome), no trailing slash. */
function contact_base_path(): string {
    $dir = dirname($_SERVER['SCRIPT_NAME'] ?? '/');
    $dir = str_replace('\\', '/', $dir);
    $dir = rtrim($dir, '/');
    if ($dir === '' || $dir === '.') {
        return '';
    }
    return $dir;
}

function redirect_home(string $query = ''): void {
    $base = contact_base_path();
    $target = ($base === '' ? '/' : $base . '/');
    if ($query !== '') {
        $target .= '?' . $query;
    }
    header('Location: ' . $target);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_home();
}

function field(string $key): string {
    $raw = $_POST[$key] ?? '';
    if (!is_string($raw)) {
        return '';
    }
    return trim($raw);
}

$name = field('name');
$email = field('email');
$phone = field('phone');
$preferredTime = field('preferredTime');
$suburb = field('suburb');
$message = field('message');

if ($name === '') {
    redirect_home('sent=0&error=' . rawurlencode('Name is required.'));
}

if ($phone === '') {
    redirect_home('sent=0&error=' . rawurlencode('Phone number is required so we can call you back.'));
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_home('sent=0&error=' . rawurlencode('Enter a valid email address.'));
}

if ($preferredTime === '') {
    redirect_home('sent=0&error=' . rawurlencode('Select a preferred contact time.'));
}

if ($suburb === '') {
    redirect_home('sent=0&error=' . rawurlencode('Suburb or city is required.'));
}

if ($message === '' || strlen($message) < 10) {
    redirect_home('sent=0&error=' . rawurlencode('Please include a short message.'));
}

$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safePhone = str_replace(["\r", "\n"], '', $phone);

$body = "New enquiry from the JINI Smart Home website\n\n"
    . "Name: {$safeName}\n"
    . "Phone: {$safePhone}\n"
    . "Email: " . ($safeEmail !== '' ? $safeEmail : '(not provided)') . "\n"
    . "Preferred contact time: {$preferredTime}\n"
    . "Suburb / city: {$suburb}\n\n"
    . "Message:\n{$message}\n";

// Phone-first: only attempt mail when a real recipient is configured.
$to = trim(CONTACT_TO_EMAIL);
if ($to !== '' && $to !== 'REPLACE_WITH_YOUR_EMAIL@example.com.au') {
    $replyTo = $safeEmail !== '' ? $safeEmail : CONTACT_FROM_EMAIL;
    $headers = [];
    $headers[] = 'From: ' . CONTACT_FROM_EMAIL;
    $headers[] = 'Reply-To: ' . $replyTo;
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'X-Mailer: PHP/' . phpversion();

    $ok = @mail($to, CONTACT_SUBJECT, $body, implode("\r\n", $headers));
    if (!$ok) {
        // Still succeed for the visitor — phone-first follow-up is the primary path.
        // Owner can check hosting/SMTP later.
    }
}

redirect_home('sent=1');
