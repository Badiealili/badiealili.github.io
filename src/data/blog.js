const articles = [
    {
      "id": 0,
      "title": "The Art of Mindful Living",
      "subtitle": "Finding peace in a busy world",
      "bodyText": "Mindful living is about being present in every moment. It helps reduce stress and improves overall well-being. In this article, we'll explore practical tips to incorporate mindfulness into your daily life.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-11-01"
    },
    {
      "id": 1,
      "title": "Top 10 Travel Destinations for 2024",
      "subtitle": "Explore the world like never before",
      "bodyText": "From the sandy beaches of Bali to the historic streets of Rome, we've curated a list of must-visit destinations for your 2024 travel bucket list.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-10-28"
    },
    {
      "id": 2,
      "title": "The Ultimate Guide to Plant-Based Eating",
      "subtitle": "Healthy, sustainable, and delicious",
      "bodyText": "Discover the benefits of a plant-based diet, including tips on transitioning, essential nutrients, and delicious recipes to try.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-10-20"
    },
    {
      "id": 3,
      "title": "Mastering Time Management",
      "subtitle": "Boost productivity with these proven strategies",
      "bodyText": "Time management is crucial for achieving success in both your personal and professional life. Learn how to make the most of your time with our expert tips.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-09-15"
    },
    {
      "id": 4,
      "title": "A Beginner's Guide to Yoga",
      "subtitle": "Improve your mind, body, and soul",
      "bodyText": "Yoga is more than just exercise; it's a way of life. This guide covers the basics of yoga, including poses, breathing techniques, and the mental benefits of practicing regularly.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-09-10"
    },
    {
      "id": 5,
      "title": "How to Start a Successful Blog",
      "subtitle": "Turn your passion into profit",
      "bodyText": "Blogging can be a rewarding way to share your thoughts, expertise, and creativity. Learn the essential steps to start your own blog and grow your audience.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-08-30"
    },
    {
      "id": 6,
      "title": "Exploring the Wonders of Space",
      "subtitle": "A journey beyond our planet",
      "bodyText": "Space exploration has always fascinated humanity. In this article, we delve into the mysteries of the universe and the latest discoveries in space science.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-08-25"
    },
    {
      "id": 7,
      "title": "The Best Home Workout Routines",
      "subtitle": "Stay fit without a gym membership",
      "bodyText": "Whether you're a beginner or a fitness enthusiast, these home workout routines will help you stay in shape without the need for any equipment.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-08-12"
    },
    {
      "id": 8,
      "title": "Understanding Cryptocurrency",
      "subtitle": "The future of digital money",
      "bodyText": "Cryptocurrencies are revolutionizing the financial world. Learn what they are, how they work, and the potential risks and rewards of investing in them.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-07-20"
    },
    {
      "id": 9,
      "title": "Gardening Tips for Beginners",
      "subtitle": "Grow your own green paradise",
      "bodyText": "Gardening is a relaxing and rewarding hobby. Whether you have a large backyard or a small balcony, these beginner tips will help you get started.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-07-10"
    },
    {
      "id": 10,
      "title": "The Science of Happiness",
      "subtitle": "What truly makes us happy?",
      "bodyText": "Explore the science behind happiness and discover practical ways to improve your mood and well-being.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-06-25"
    },
    {
      "id": 11,
      "title": "Delicious Vegan Recipes",
      "subtitle": "Healthy and flavorful plant-based dishes",
      "bodyText": "Being vegan doesn't mean giving up on flavor. Try these delicious and easy-to-make vegan recipes that everyone will love.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-06-15"
    },
    {
      "id": 12,
      "title": "Mindful Money Management",
      "subtitle": "Take control of your finances",
      "bodyText": "Managing your money doesn't have to be stressful. Learn strategies to save, invest, and budget mindfully.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-05-30"
    },
    {
      "id": 13,
      "title": "Photography Tips for Beginners",
      "subtitle": "Capture stunning photos with ease",
      "bodyText": "Learn the basics of photography, from understanding your camera settings to composing beautiful shots.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-05-15"
    },
    {
      "id": 14,
      "title": "The Benefits of Journaling",
      "subtitle": "Unlock your creativity and reduce stress",
      "bodyText": "Journaling can be a powerful tool for self-reflection and stress relief. Discover how to start and maintain a journaling habit.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-04-20"
    },
    {
      "id": 15,
      "title": "Top Coding Languages to Learn in 2024",
      "subtitle": "Boost your tech skills with these languages",
      "bodyText": "Want to enhance your tech career? Start by learning these top programming languages that are in high demand.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-04-10"
    },
    {
      "id": 16,
      "title": "Eco-Friendly Home Tips",
      "subtitle": "Make your living space greener",
      "bodyText": "Adopting sustainable practices at home is easier than you think. Here are some tips to create an eco-friendly living space.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-03-25"
    },
    {
      "id": 17,
      "title": "Exploring the World of Virtual Reality",
      "subtitle": "The next frontier in technology",
      "bodyText": "Virtual Reality is changing how we experience entertainment, education, and more. Learn about its impact and future potential.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-03-05"
    },
    {
      "id": 18,
      "title": "Mindset Shifts for a Positive Life",
      "subtitle": "Transform your thinking, transform your life",
      "bodyText": "Your mindset has a powerful influence on your life. Discover the mindset shifts that can lead to greater happiness and success.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-02-18"
    },
    {
      "id": 19,
      "title": "Fitness Myths Debunked",
      "subtitle": "Separating fact from fiction",
      "bodyText": "Don't let fitness myths hold you back. Learn the truth about common misconceptions in the world of health and fitness.",
      "image": "https://images.unsplash.com/photo-1725917482759-435bfa3d8d93?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "date": "2024-02-01"
    }
  ]

  export default articles;