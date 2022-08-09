import cloudinary from 'cloudinary'

// From https://cloudinary.com/documentation/backups_and_version_management#restoring_a_version_of_an_asset
// Property 'download_backedup_asset' does not exist on type 'typeof utils'.
cloudinary.v2.utils.download_backedup_asset('62c2a18d622be7e190d21df8e05b1416', '26fe6d95df856f6ae12f5678be94516a')