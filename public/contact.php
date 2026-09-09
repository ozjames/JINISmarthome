<?php
/**
 * Contact form handler for Crazy Domains / shared PHP hosting.
 *
 * BEFORE GO-LIVE: set CONTACT_TO_EMAIL below to your real inbox.
 * Some hosts disable PHP mail() — if messages never arrive, ask Crazy Domains
 * support about SMTP (or install a PHPMailer/SMTP plugin via cPanel).
 *
 * Redirects use the directory of this script so the same file works under
 * /JINISmarthome/ (GitHub Pages) or /new_home/ (Crazy Domains) without edits.
 */

// ========== CONFIG — edit this ==========
define('CONTACT_TO_EMAIL', 'REPLACE_WITH_YOUR_EMAIL@example.com.au'); // ← set recipient
define('CONTACT_FROM_EMAIL', 'noreply@example.com.au'); // optional: From address (use a domain you control)
define('CONTACT_SUBJECT', 'JINI Smart Home — website enquiry');
// ========================================

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

if ($email === '' && $phone === '') {
    redirect_home('sent=0&error=' . rawurlencode('Provide an email or phone number.'));
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

if (CONTACT_TO_EMAIL === 'REPLACE_WITH_YOUR_EMAIL@example.com.au' || CONTACT_TO_EMAIL === '') {
    redirect_home('sent=0&error=' . rawurlencode('Contact form is not configured yet. Set CONTACT_TO_EMAIL in contact.php.'));
}

$safeName = str_replace(["\r", "\n"], '', $name);
$safeEmail = str_replace(["\r", "\n"], '', $email);
$safePhone = str_replace(["\r", "\n"], '', $phone);

$body = "New enquiry from the JINI Smart Home website\n\n"
    . "Name: {$safeName}\n"
    . "Email: " . ($safeEmail !== '' ? $safeEmail : '(not provided)') . "\n"
    . "Phone: " . ($safePhone !== '' ? $safePhone : '(not provided)') . "\n"
    . "Preferred contact time: {$preferredTime}\n"
    . "Suburb / city: {$suburb}\n\n"
    . "Message:\n{$message}\n";

$replyTo = $safeEmail !== '' ? $safeEmail : CONTACT_FROM_EMAIL;
$headers = [];
$headers[] = 'From: ' . CONTACT_FROM_EMAIL;
$headers[] = 'Reply-To: ' . $replyTo;
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$ok = @mail(CONTACT_TO_EMAIL, CONTACT_SUBJECT, $body, implode("\r\n", $headers));

if (!$ok) {
    redirect_home('sent=0&error=' . rawurlencode('Could not send email. Ask your host if PHP mail() is enabled, or use SMTP.'));
}

redirect_home('sent=1');
