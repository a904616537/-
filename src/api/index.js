import request from './request'

export function getCode(data) {
  return request({
	url    : '/code/code',
	method : 'post',
    data
  })
}

export function verificationCode(data) {
  return request({
	url    : '/code/verification',
	method : 'post',
    data
  })
}

