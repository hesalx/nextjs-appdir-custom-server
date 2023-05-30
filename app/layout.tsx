export default function RootLayout({children, header}) {
  return (
    <html>
    <head/>
    <body>
    <div>{header}</div>
    <div>{children}</div>
    </body>
    </html>
  )
}
