# QR Code Generator 

A sleek and modern QR Code Generator built with React and Vite. Create custom QR codes instantly with adjustable sizes and easy download functionality.

![QR Code Generator Demo](https://via.placeholder.com/400x200/3e0e89/ffffff?text=QR+Code+Generator)

## Features

- **Instant QR Generation**: Create QR codes from any text or URL in seconds
- **Adjustable Size**: Customize QR code size from 1px to 1000px
- **Easy Download**: Download generated QR codes as PNG images
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations
- **Fast & Lightweight**: Built with modern React and optimized for performance

## Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom styling with responsive design
- **QR Server API** - Free QR code generation service

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/qr-code-generator.git
   cd qr-code-generator/qr-code
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running!

## Usage

1. **Enter Data**: Type any text or URL in the input field
2. **Set Size**: Choose your desired QR code size (1-1000px)
3. **Generate**: Click "Generate QR Code" button
4. **Download**: Click "Download QR Code" to save as PNG

### Size Controls
- Use the **+** and **-** buttons for quick size adjustments
- Or directly enter the size value in the number input field

## Project Structure

```
qr-code-generator/
├── qr-code/
│   ├── public/
│   │   └── Qr code.png          # Default QR code image
│   ├── src/
│   │   ├── App.jsx              # Main app component
│   │   ├── Qrcode.jsx           # QR code generator logic
│   │   ├── App.css              # Styling
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # Entry point
│   ├── package.json             # Dependencies and scripts
│   ├── vite.config.js           # Vite configuration
│   └── README.md                # This file
```

## Customization

### Styling
The app uses a custom color scheme:
- **Primary**: `#3e0e89` (Purple)
- **Accent**: `#07057e` (Dark Blue)
- **Success**: `#0b961e` (Green)

Feel free to modify colors in `src/App.css` to match your brand!

### Features
- Easily add new QR code formats
- Integrate additional QR code APIs
- Add more customization options

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to the branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

## Features roadmap

- [ ] **Batch Generation**: Generate multiple QR codes at once
- [ ] **QR Code History**: Save and manage previously generated codes
- [ ] **Custom Colors**: Choose QR code colors
- [ ] **Logo Integration**: Add logos to QR codes
- [ ] **Error Correction**: Advanced error correction levels
- [ ] **Export Formats**: Support for SVG, PDF formats

## Issues & Support

Found a bug? Have a suggestion? [Open an issue](https://github.com/yourusername/qr-code-generator/issues) on GitHub!

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Rahul **
- Website: [rahulgandhi.in](https://rahulgandhi.in/)
- GitHub: [@yourusername](https://github.com/yourusername)

---

**Star this repository** if you found it helpful!

Made with using React & Vite
