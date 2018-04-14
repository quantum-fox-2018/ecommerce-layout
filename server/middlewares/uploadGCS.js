const Multer = require('multer')
const Storage = require('@google-cloud/storage')
const config = {
  cloud_bucket: 'dj-store',
  project_id: 'precise-treat-197911'
}

const storage = Storage({
  projectId: config.project_id,
  keyFilename: './My First Project-149f5cc93dce.json'
})

const bucket = storage.bucket(config.cloud_bucket)

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024
  }
})

function getPublicUrl (filename) {
  return `https://storage.googleapis.com/${config.cloud_bucket}/${filename}`
}

function sendFileGCS (req, res, next) {
  console.log('masuk send file');
  
  if (!req.file) {
    return next()
  }
  const gcsname = Date.now() + '.' + req.file.originalname.split('.').pop()
  const file = bucket.file(gcsname)
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype
    }
  })
  stream.on('error', error => {
    req.file.cloudStorageError = error
    next(error)
  })
  stream.on('finish', () => {
    req.file.cloudStorageObject = gcsname
    file.makePublic().then(() => {
      req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
      next()
    })
  })
  stream.end(req.file.buffer)
}

module.exports = {multer, getPublicUrl, sendFileGCS}