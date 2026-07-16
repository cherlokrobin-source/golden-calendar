from pathlib import Path
import shutil

print("🧹 Golden Calendar Cleanup v2")
print("-" * 45)

root = Path(".")
archive = root / "archive_backups"

archive.mkdir(exist_ok=True)

delete_patterns = [
    "add_*.py",
    "edit_html.py",
    "update_*.py",
]

backup_patterns = [
    "*.backup",
    "*.before_*",
    "*.dashboard_backup",
    "*.identity_backup",
    "*.static_backup",
]


deleted = 0
moved = 0


# حذف أدوات التعديل المؤقتة
for pattern in delete_patterns:
    for file in root.rglob(pattern):

        if file.is_file() and file.name != "cleanup.py":

            print("🗑 حذف:", file)

            file.unlink()
            deleted += 1



# نقل النسخ الاحتياطية
for pattern in backup_patterns:
    for file in root.rglob(pattern):

        if file.is_file():

            destination = archive / file.name

            # منع تكرار الاسم
            counter = 1

            while destination.exists():

                destination = archive / f"{file.stem}_{counter}{file.suffix}"
                counter += 1


            print("📦 نقل:", file)

            shutil.move(
                str(file),
                str(destination)
            )

            moved += 1



print("\n✅ اكتملت العملية")
print("🗑 الملفات المحذوفة:", deleted)
print("📦 النسخ المؤرشفة:", moved)
