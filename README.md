---

Voici un joli **README.md** pour votre bibliothèque de carrousel React Native

---

# React Native Custom Caroussel

A lightweight and customizable caroussel component for React Native. Build beautiful caroussels with ease, featuring auto-play, vertical or horizontal scrolling, and pagination.

## 🎯 Features

- **Customizable Layout**: Vertical and horizontal scrolling support.
- **Auto-Play**: Enable smooth auto-scrolling with configurable intervals.
- **Pagination**: Clean and responsive pagination dots.
- **Flexibility**: Fully customizable `renderItem` for any type of content.
- **Lightweight**: Built with simplicity and performance in mind.

---

## 📦 Installation

```bash
npm install react-native-caroussel
```

Or with Yarn:

```bash
yarn add react-native-caroussel
```

---

## 🚀 Usage

### Basic Example

```tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Caroussel from 'react-native-caroussel';

const slides = [
  { image: require('./assets/image1.jpg'), title: 'Slide 1', text: 'Description 1' },
  { image: require('./assets/image2.jpg'), title: 'Slide 2', text: 'Description 2' },
  { image: require('./assets/image3.jpg'), title: 'Slide 3', text: 'Description 3' },
];

const App = () => {
  const renderItem = (item: { image: any; title: string; text: string }, index: number) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <Caroussel
      data={slides}
      renderItem={renderItem}
      autoPlay
      autoPlayInterval={3000}
      scrollAnimationDuration={500}
      vertical={false}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default App;
```

---

## ⚙️ Props

| Prop                     | Type                  | Default         | Description                                           |
|--------------------------|-----------------------|-----------------|-------------------------------------------------------|
| `data`                   | `Array<any>`         | **Required**    | Data array containing the slides to render.          |
| `renderItem`             | `Function`           | **Required**    | Function to render each slide.                       |
| `autoPlay`               | `boolean`            | `false`         | Enables automatic scrolling.                         |
| `autoPlayInterval`       | `number`             | `3000`          | Interval (in ms) for auto-play scrolling.            |
| `scrollAnimationDuration`| `number`             | `500`           | Animation duration (in ms) for scrolling.            |
| `vertical`               | `boolean`            | `false`         | Enables vertical scrolling layout.                   |

---

## 📸 Screenshots

### Horizontal Layout

![Horizontal Caroussel Screenshot](https://via.placeholder.com/400x200?text=Horizontal+Caroussel)

### Vertical Layout

![Vertical Caroussel Screenshot](https://via.placeholder.com/200x400?text=Vertical+Caroussel)

---

## 🎨 Customization

The component is designed to be fully customizable. Use your own styles and layout for slides, and control pagination appearance via styles.

### Custom Pagination

```tsx
const Pagination = ({ currentIndex, total }: { currentIndex: number; total: number }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
    {Array.from({ length: total }).map((_, index) => (
      <View
        key={index}
        style={{
          width: 10,
          height: 10,
          borderRadius: 5,
          margin: 5,
          backgroundColor: currentIndex === index ? 'blue' : 'gray',
        }}
      />
    ))}
  </View>
);
```

---

## 🛠️ Development

### Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ofernand21/react-native-caroussel.git/react-native-caroussel.git
   cd react-native-caroussel
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the project:

   ```bash
   npm start
   ```

---

## 🌟 Contributing

Contributions are welcome! Please open an issue or submit a pull request with your improvements.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 💬 Support

For questions, feedback, or feature requests, feel free to [open an issue](https://github.com/ofernand21/react-native-caroussel.git/react-native-caroussel/issues).

Happy coding! 🎉
