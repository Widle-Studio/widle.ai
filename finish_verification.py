import sys

def frontend_verification_complete(screenshot_path: str, additional_media_paths: list = None) -> None:
    print(f"Verification complete with screenshot: {screenshot_path}")
    if additional_media_paths:
        print(f"Additional media: {additional_media_paths}")

frontend_verification_complete(
    screenshot_path='/home/jules/verification/screenshots/verification.png',
    additional_media_paths=['/home/jules/verification/videos/fb13999046679ebe83cbf6fba515083b.webm']
)
