# 🚀 Production Deployment Guide

## Prerequisites

- Node.js 18+
- Vercel CLI (optional, for local testing)
- Domain name (optional)

## Environment Setup

Create a `.env.local` file with the following variables:

```env
# Add any environment variables your app needs
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Build & Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 2: GitHub Integration

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Configure Build Settings**
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "installCommand": "npm install",
     "framework": "nextjs"
   }
   ```

## Domain Configuration

1. **Add Custom Domain**
   ```bash
   vercel domains add your-domain.com
   ```

2. **Update DNS Records**
   - Add CNAME record: `your-domain.com` → `cname.vercel-dns.com`
   - Add A record: `www.your-domain.com` → `76.76.21.21`

## Performance Optimization Checklist

- [x] **Image Optimization**: Configured Next.js Image component
- [x] **Font Loading**: Preloaded Inter and JetBrains Mono fonts
- [x] **Code Splitting**: Automatic with Next.js App Router
- [x] **Compression**: Enabled via Vercel CDN
- [x] **Caching**: Optimized headers and CDN caching
- [x] **Bundle Analysis**: Run `npm run build` to check bundle sizes

## SEO & Analytics Setup

### Google Search Console
1. Add your domain to [Google Search Console](https://search.google.com/search-console)
2. Verify ownership via HTML meta tag
3. Submit sitemap: `https://your-domain.com/sitemap.xml`

### Google Analytics (Optional)
```bash
npm install @vercel/analytics
```

### Update Metadata
Edit `src/app/layout.tsx` with your actual information:
- Update site URL
- Add real social media handles
- Update contact information

## Security Headers

Security headers are automatically configured in `next.config.js`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## Monitoring & Analytics

### Vercel Analytics
- Automatically enabled via `@vercel/analytics`
- View real-time analytics in Vercel dashboard

### Error Monitoring
- Error boundaries implemented for graceful error handling
- Console errors removed in production builds

## Performance Testing

### Lighthouse Scores
Run Lighthouse tests to verify performance:
- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >95
- **SEO**: >95

### Core Web Vitals
Monitor via Google Search Console:
- Largest Contentful Paint (LCP): <2.5s
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1

## Asset Optimization

### Images
- Replace placeholder images with optimized versions
- Use WebP/AVIF formats for better compression
- Implement proper alt texts for accessibility

### Icons & Favicons
Generate proper favicon files:
```bash
# Use a favicon generator tool
# - favicon.ico (16x16, 32x32)
# - apple-touch-icon.png (180x180)
# - icon-192.png, icon-512.png (PWA)
```

### Fonts
- Consider using `next/font` for optimal font loading
- Preload critical font weights only

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works on mobile
- [ ] Check forms and interactive elements
- [ ] Test 404 page
- [ ] Verify social sharing (Open Graph)
- [ ] Check sitemap is accessible
- [ ] Test contact form (if implemented)
- [ ] Verify analytics are tracking
- [ ] Run Lighthouse audit
- [ ] Test on multiple devices/browsers

## Troubleshooting

### Common Issues

**Blank Page on Load**
- Check browser console for hydration errors
- Verify environment variables are set
- Check if all components are properly imported

**Slow Loading**
- Run `npm run build` to check bundle sizes
- Optimize images and remove unused assets
- Check font loading performance

**SEO Issues**
- Verify metadata is correct in page source
- Test Open Graph with Facebook debugger
- Check robots.txt and sitemap.xml

**Analytics Not Working**
- Verify Vercel Analytics is properly imported
- Check if ad blockers are interfering
- Wait 24-48 hours for data to appear

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm audit fix`
- Monitor performance metrics
- Update content regularly
- Backup important data

### Monitoring
- Set up Vercel alerts for downtime
- Monitor Core Web Vitals
- Check Google Search Console regularly
- Review analytics data monthly

## Support

For deployment issues:
1. Check Vercel deployment logs
2. Review Next.js build output
3. Test locally with `npm run build && npm start`
4. Check browser developer tools for errors

---

🎉 **Your portfolio is now production-ready!**
