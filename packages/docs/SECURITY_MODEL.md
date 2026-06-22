# Security Model

HF Space uses a defense-in-depth security model.

## Sandbox Architecture

All untrusted code runs in isolated sandboxes with:
- No direct filesystem access
- No network access (unless explicitly granted)
- Memory limits (256MB default)
- CPU limits (0.5 cores default)
- System call filtering (seccomp)

## Permission System

Extensions request permissions at install time.
Users must explicitly grant each permission.

## Encryption

- All secrets stored in HashiCorp Vault (or local key manager)
- AES-256-CBC for data encryption
- RSA-4096 for signing

## Code Signing

All published extensions are signed and verified.
