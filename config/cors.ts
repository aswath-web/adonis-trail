import type { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
  
  enabled: true,

  origin: true,

  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],

  headers: ['Content-Type', 'cache-control', 'content-language', 'expires', 'last-modified', 'pragma'],

  exposeHeaders: [
    'cache-control',
    'content-language',
    'content-type',
    'expires',
    'last-modified',
    'pragma',
  ],
  credentials: true,
  maxAge: 90,
}

export default corsConfig