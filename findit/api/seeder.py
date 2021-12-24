from django_seed import Seed

seeder = Seed.seeder()

from .models import Image
import glob

files = '../coil-100/*.png'

for imagePath in glob.glob(files):
    filename = imagePath[imagePath.rfind("/coil-100/") + 1:]
    print(filename)

    seeder.add_entity(Image, 10, {
        'image': filename
})

inserted_pks = seeder.execute()