const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
    accessKeyId: 'ASIAV7CGGL24KBMMECM4',
    secretAccessKey: '8frZDaTKUKI/BM7duX4s7EplECUX0FRDIEvojND3',
    sessionToken: 'FQoGZXIvYXdzEIn//////////wEaDIUDJIDRW/ZLueaKhyKKAgtGWA9/dscxP2Qz55/HkXGUp2si0+KSnvSZa1S8c5L18czqJscYStjJm9k6vX8p/pTqui/y5Yx9VFCKu5MqrwpIvWyY39AzvhBKtXAWmqwYViCcE44HoKbfRAYXCAAY+LvCMeqpkKqg3i/mk/M2+uxipAOk+JusRJs366iNdL4unPskvw79JiUJ88eHLkYnwOYBm1OCKLV/uMXzbS1c84mJHudwBFKm9n0aVcR+K6aNR+ynkrl31Bduddp8wKOSzNlbDwFSw+Ax7OuaOL5QEyPkuHK6s+ouXNOejgacDJ+BnYJBsJnQyJxvq18/BDHRPTjNdB69b2dTvK2OegFad8HHwPh7JjveSBJAKIKooO0F',
    region: 'us-east-1',
    Bucket: 'onclick'
});

const s0 = new AWS.S3({});
const upload = multer({
    storage: multerS3({
        s3: s0,
        bucket: 'youmechat',
        acl: 'public-read',
        metadata: function(req, file, cb){
            cb(null, {fieldName: file.fieldname});
        },
        key: function(req, file, cb){
            cb(null, file.originalname);
        }
    }),

    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase();
    }
})

exports.Upload = upload;











