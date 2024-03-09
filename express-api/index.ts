// const express = require('express')
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  //   res.send('Hello World!')
  // res.json({
  //   ok: true,
  //   msg: 'sd'
  // })
  res.status(401).json({
    ok: false,
    msg: 'No hay token en la petición'
  })
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})