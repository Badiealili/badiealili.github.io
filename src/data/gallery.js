const images = [
  {
    "id": 1,
    "src": "https://source.unsplash.com/random",
    "alt": "Mountain landscape",
    "date": "2024-01-03",
    "description": "A breathtaking mountain landscape captured in natural light."
  },
  {
    "id": 2,
    "src": "https://source.unsplash.com/random",
    "alt": "City skyline",
    "date": "2024-01-06",
    "description": "A modern city skyline showcasing urban architecture."
  },
  {
    "id": 3,
    "src": "https://source.unsplash.com/random",
    "alt": "Ocean waves",
    "date": "2024-01-10",
    "description": "Rolling ocean waves creating a calm and powerful scene."
  },
  {
    "id": 4,
    "src": "https://source.unsplash.com/random",
    "alt": "Forest path",
    "date": "2024-01-14",
    "description": "A quiet path winding through a dense forest."
  },
  {
    "id": 5,
    "src": "https://source.unsplash.com/random",
    "alt": "Desert dunes",
    "date": "2024-01-18",
    "description": "Soft desert dunes shaped by the wind under open skies."
  },
  {
    "id": 6,
    "src": "https://source.unsplash.com/random",
    "alt": "Snowy landscape",
    "date": "2024-01-22",
    "description": "A serene snowy landscape with muted winter tones."
  },
  {
    "id": 7,
    "src": "https://source.unsplash.com/random",
    "alt": "Sunset horizon",
    "date": "2024-01-26",
    "description": "A warm sunset casting vibrant colors across the horizon."
  },
  {
    "id": 8,
    "src": "https://source.unsplash.com/random",
    "alt": "Calm lake",
    "date": "2024-01-30",
    "description": "A calm lake reflecting the surrounding scenery."
  },
  {
    "id": 9,
    "src": "https://source.unsplash.com/random",
    "alt": "Night city lights",
    "date": "2024-02-03",
    "description": "City lights glowing against the night sky."
  },
  {
    "id": 10,
    "src": "https://source.unsplash.com/random",
    "alt": "Wild coastline",
    "date": "2024-02-07",
    "description": "A rugged coastline shaped by sea and wind."
  },
  {
    "id": 11,
    "src": "https://source.unsplash.com/random",
    "alt": "Green valley",
    "date": "2024-02-11",
    "description": "A lush green valley stretching into the distance."
  },
  {
    "id": 12,
    "src": "https://source.unsplash.com/random",
    "alt": "Foggy morning",
    "date": "2024-02-15",
    "description": "A foggy morning creating a soft, mysterious atmosphere."
  },
  {
    "id": 13,
    "src": "https://source.unsplash.com/random",
    "alt": "Urban street",
    "date": "2024-02-19",
    "description": "A candid view of life on a busy urban street."
  },
  {
    "id": 14,
    "src": "https://source.unsplash.com/random",
    "alt": "Autumn trees",
    "date": "2024-02-23",
    "description": "Autumn trees displaying rich seasonal colors."
  },
  {
    "id": 15,
    "src": "https://source.unsplash.com/random",
    "alt": "Mountain lake",
    "date": "2024-02-27",
    "description": "A tranquil lake surrounded by towering mountains."
  },
  {
    "id": 16,
    "src": "https://source.unsplash.com/random",
    "alt": "Open road",
    "date": "2024-03-02",
    "description": "An open road leading toward the horizon."
  },
  {
    "id": 17,
    "src": "https://source.unsplash.com/random",
    "alt": "Starry sky",
    "date": "2024-03-06",
    "description": "A clear night sky filled with countless stars."
  },
  {
    "id": 18,
    "src": "https://source.unsplash.com/random",
    "alt": "Rolling hills",
    "date": "2024-03-10",
    "description": "Rolling hills bathed in soft daylight."
  },
  {
    "id": 19,
    "src": "https://source.unsplash.com/random",
    "alt": "Rainy window",
    "date": "2024-03-14",
    "description": "Raindrops sliding down a window pane."
  },
  {
    "id": 20,
    "src": "https://source.unsplash.com/random",
    "alt": "Cozy interior",
    "date": "2024-03-18",
    "description": "A cozy interior scene with warm lighting."
  },
  {
    "id": 21,
    "src": "https://source.unsplash.com/random",
    "alt": "River bend",
    "date": "2024-03-22",
    "description": "A river bending gently through the landscape."
  },
  {
    "id": 22,
    "src": "https://source.unsplash.com/random",
    "alt": "Cloudy sky",
    "date": "2024-03-26",
    "description": "Textured clouds filling the sky with depth."
  },
  {
    "id": 23,
    "src": "https://source.unsplash.com/random",
    "alt": "Rocky terrain",
    "date": "2024-03-30",
    "description": "A rugged rocky terrain shaped over time."
  },
  {
    "id": 24,
    "src": "https://source.unsplash.com/random",
    "alt": "Quiet village",
    "date": "2024-04-03",
    "description": "A quiet village scene with rustic charm."
  },
  {
    "id": 25,
    "src": "https://source.unsplash.com/random",
    "alt": "Sunlit meadow",
    "date": "2024-04-07",
    "description": "A sunlit meadow filled with natural textures."
  },
  {
    "id": 26,
    "src": "https://source.unsplash.com/random",
    "alt": "Harbor view",
    "date": "2024-04-11",
    "description": "A peaceful harbor with boats resting on the water."
  },
  {
    "id": 27,
    "src": "https://source.unsplash.com/random",
    "alt": "Tropical beach",
    "date": "2024-04-15",
    "description": "A tropical beach with clear water and sand."
  },
  {
    "id": 28,
    "src": "https://source.unsplash.com/random",
    "alt": "Minimal architecture",
    "date": "2024-04-19",
    "description": "Clean lines and shapes in minimal architecture."
  },
  {
    "id": 29,
    "src": "https://source.unsplash.com/random",
    "alt": "Golden fields",
    "date": "2024-04-23",
    "description": "Golden fields stretching across the countryside."
  },
  {
    "id": 30,
    "src": "https://source.unsplash.com/random",
    "alt": "Misty forest",
    "date": "2024-04-27",
    "description": "Mist drifting through tall forest trees."
  },
  {
    "id": 31,
    "src": "https://source.unsplash.com/random",
    "alt": "Waterfall",
    "date": "2024-05-01",
    "description": "A flowing waterfall hidden within nature."
  },
  {
    "id": 32,
    "src": "https://source.unsplash.com/random",
    "alt": "Night road",
    "date": "2024-05-05",
    "description": "A quiet road illuminated under the night sky."
  }
]

  export default images;
