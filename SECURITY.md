# Security Policy

## Overview
This document outlines the security measures implemented for the Holobeauty website to ensure it meets modern web security standards and is safe for users to browse.

## Security Measures Implemented

### 1. Dependency Security
- ✅ **Resolved all npm audit vulnerabilities**
  - Fixed React Router security issues (GHSA-cpj6-fhp6-mr6j)
  - Updated esbuild to resolve development server vulnerability (GHSA-67mh-4wv8-2f99)
  - Updated Babel helpers to fix RegExp complexity issue (GHSA-968p-4wvh-cqc8)

### 2. HTTP Security Headers
- ✅ **X-Frame-Options**: DENY (Prevents clickjacking attacks)
- ✅ **X-Content-Type-Options**: nosniff (Prevents MIME type sniffing)
- ✅ **X-XSS-Protection**: 1; mode=block (Enables XSS protection)
- ✅ **Referrer-Policy**: strict-origin-when-cross-origin (Controls referrer information)
- ✅ **Permissions-Policy**: Restricts geolocation, camera, microphone access
- ✅ **Content-Security-Policy**: Comprehensive CSP to prevent XSS and injection attacks

### 3. Content Security Policy (CSP)
Our CSP implementation includes:
- `default-src 'self'` - Only allow resources from same origin by default
- `script-src 'self' 'unsafe-inline' 'unsafe-eval'` - Allow scripts from same origin and inline scripts (needed for React)
- `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com` - Allow styles from same origin and Google Fonts
- `img-src 'self' data: https:` - Allow images from same origin, data URLs, and HTTPS sources
- `connect-src 'self' https: wss:` - Allow connections to same origin and secure protocols
- `object-src 'none'` - Block all plugins (Flash, etc.)

### 4. HTTPS Enforcement
- ✅ Site is served over HTTPS via GitHub Pages
- ✅ All external resources use HTTPS
- ✅ WhatsApp integration uses secure HTTPS URLs

### 5. Firebase Security
- ⚠️ **Note**: Firebase API keys are public by design and safe to expose in client-side code
- Firebase security is enforced through Firestore/Database rules, not API key secrecy
- Consider implementing proper Firebase security rules if not already done

### 6. External Dependencies
- ✅ All dependencies are from trusted sources (npm, CDNs)
- ✅ No suspicious or malicious external scripts
- ✅ WhatsApp integration uses official wa.me domain

### 7. Input Validation & Sanitization
- ✅ No use of dangerous functions like `eval()` or `innerHTML`
- ✅ React's built-in XSS protection through JSX
- ✅ URL encoding for WhatsApp message parameter

## Security Reporting
If you discover a security vulnerability, please:
1. Email the repository owner through GitHub
2. Do not publicly disclose the issue until it has been addressed
3. Provide detailed information about the vulnerability

## Security Best Practices for Users
- Always verify the URL is `https://ben-jamin-chan.github.io/holobeauty/`
- Keep your browser updated
- Be cautious when clicking external links
- Report any suspicious behavior

## Monitoring
- Regular dependency updates via Dependabot
- Periodic security audits
- Monitoring for new vulnerabilities in used packages

## Last Updated
December 2024

## Contact
For security-related inquiries, please contact through the repository's GitHub page. 