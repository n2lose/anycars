The demand for Next.js 13 applications, build a state-of-the-art modern application that utilizes all of the latest and greatest of what Next 13 has to offer, leveraging features such as server-side rendering and the app router.

https://anycars-16e8hcfdd-lamnt8x-gmailcom.vercel.app

Getting started

    
1. Clone the repository
2. Run the command
```bash
npm install
```

3.Create and config for env.local :
```bash
NEXT_PUBLIC_RAPID_API_KEY = 'YOURKEY'
NEXT_PUBLIC_RAPID_API_HOST = 'YOURHOST'
NEXT_PUBLIC_RAPID_API_URL = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars'
NEXT_PUBLIC_IMAGIN_URL = 'cdn.imagin.studio'
NEXT_PUBLIC_IMAGIN_KEY = 'YOURKEY'
```

4. Add next.config.js:
```bash
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    }
}
```

5. Run the development server:
```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.
