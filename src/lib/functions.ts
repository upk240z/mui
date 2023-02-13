import * as QRCode from 'qrcode'

export const drawQr = (canvas: HTMLCanvasElement, text: string) => {
  QRCode.toCanvas(canvas, text, err => {
    console.log(err)
  })
}
