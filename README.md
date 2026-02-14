# 💝 Valentine's Day Interactive Website

A beautiful, interactive Valentine's Day website with a unique Polaroid-style design, animated love displays, and personalized experiences. Perfect for creating an unforgettable romantic surprise!

## ✨ Features

### 🎬 Welcome Screen
- Full-screen photo slideshow with your personal couple photos
- Animated "For [Name] 💝" title with heartbeat effect
- Smooth transition to main content with background music

### ❤️ Interactive Questions
- **First Question**: Personalized message with hidden secret answer reveal
- **Love Display**: Premium greeting card showing infinite love counter (9,999,999+) with continuous floating hearts
- **Love Meter**: Interactive slider with special messages at milestone values
- **Final Question**: Polaroid instant photo design with your couple photo

### 📸 Polaroid Photo Card
- Authentic Polaroid instant camera aesthetic
- Features your couple photo centered in the frame
- Handwritten-style text on the classic white bottom strip
- Sticker-style buttons with playful interactions
- Subtle tilt effect for realistic appearance

### 🎁 Celebration Screen
- Beautiful redeemable coupon design
- Screenshot-friendly format
- Custom redemption instructions

### 🎵 Background Music
- Auto-play background music (browser permitting)
- Volume controls
- Customizable music URL via Cloudinary

### 📱 Mobile Optimized
- Fully responsive design
- Tested on iPhone XR and various screen sizes
- Auto-scroll functionality for better mobile UX
- Touch-optimized interactions

## 🚀 Live Demo

Visit: `https://franz-james-kaba.github.io/med_exam_1023454/`

## 🛠️ Technology Stack

- **HTML5** - Structure
- **CSS3** - Styling with animations and gradients
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** (Dancing Script) - Handwritten typography
- **Cloudinary** - Music hosting

## 📁 Project Structure

```
med.exam.questions 2025/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── config.js           # Customization settings
├── images/             # Personal photos and assets
│   ├── hum.jpg        # Polaroid photo
│   ├── cheching.jpg   # Popup sticker
│   └── photo_*.jpg    # Slideshow images
└── README.md          # This file
```

## 🎨 Customization

All customization is done through `config.js`:

### Basic Settings
```javascript
valentineName: "Your Love's Name"
pageTitle: "Custom Browser Tab Title"
```

### Questions & Answers
```javascript
questions: {
    first: {
        text: "Your first question...",
        yesBtn: "Yes text",
        noBtn: "No text",
        secretAnswer: "Hidden message"
    }
    // ... more questions
}
```

### Colors & Animations
```javascript
colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b"
}
```

### Music Settings
```javascript
music: {
    enabled: true,
    autoplay: true,
    volume: 0.5,
    musicUrl: "your-cloudinary-url"
}
```

## 📸 Adding Your Photos

1. Place your photos in the `images/` folder
2. Update `index.html` slideshow section:
```html
<div class="slideshow-image" style="background-image: url('images/your-photo.jpg')"></div>
```
3. Update Polaroid photo in final question section

## 🌐 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to Pages (sidebar)
   - Source: Select `main` branch, `/ (root)` folder
   - Save and wait ~2 minutes

3. **Your site will be live at:**
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Alternative: Netlify

1. Drag and drop the project folder to [Netlify](https://www.netlify.com/)
2. Customize site name in settings
3. Deploy!

## 🎯 Key Features Explained

### Love Display Card
- Premium greeting card aesthetic with gold gradient border
- Rose decorations in all four corners
- Animated counter with shimmer effect
- Continuous hearts explosion animation

### Polaroid Final Question
- Authentic instant photo styling
- Your couple photo as background
- Handwritten-style question text
- Interactive sticker buttons
- "No" button playfully moves within frame
- Popup sticker on "No" click

### Coupon System
- Professional coupon design
- Screenshot-friendly layout
- Custom redemption message
- Mobile-responsive

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS/Android)

**Note:** Music autoplay may be blocked by some browsers until user interaction.

## 📝 License

This project is open source and available for personal use. Feel free to customize and use for your own romantic surprises!

## 💡 Tips

1. **Test on mobile** before sharing - use browser dev tools or actual device
2. **Music autoplay** - Some browsers block autoplay; the site provides a play button fallback
3. **Photo optimization** - Compress images for faster loading
4. **Disguise URL** - Use repository names like "medical-exam" for surprise factor! 😄

## 🤝 Contributing

Feel free to fork this project and create your own romantic experiences!

## ❤️ Made with Love

Created for unforgettable Valentine's Day moments! 💝

---

**Enjoy creating magical moments! 🎉**
