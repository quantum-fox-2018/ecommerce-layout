const Storage = require('@google-cloud/storage')
const Multer = require('multer')
require('dotenv').config()

const BUCKET_CONFIG = process.env.BUCKETCONFIG

const storage = Storage({
  projectId: process.env.PROJECTID,
  keyFilename: process.env.KEYFILENAME
})
const bucket = storage.bucket(BUCKET_CONFIG)

function getPublicUrl(filename) {
  return `https://storage.googleapis.com/${BUCKET_CONFIG}/${filename}`;
}

module.exports = {
  upload(req, res, next) {
    if (!req.file) return next()
    
    const filename = Date.now() + '.' + req.file.originalname.split('.').pop()
    const file = bucket.file(filename)

    const stream = file.createWriteStream({
      metadata: {
        contentType: req.file.mimetype
      }
    })

    stream.on('error', (err) => {
      console.log('error uploading to GCS', err)
      next(err)
    })

    stream.on('finish', () => {
      file.makePublic()
        .then(() => {
          req.imageURL = getPublicUrl(filename)
          next()
        })
    })
    stream.end(req.file.buffer)
  },
  multer: Multer({
    storage: Multer.MemoryStorage,
    limits: {
      fileSize: 5 * 1024 * 1024
    }
  })
}