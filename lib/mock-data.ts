export interface Movie {
  id: number;
  title: string;
  posterPath: string;
  backdropPath: string;
  genres: string[];
  rating: number;
  synopsis: string;
  duration: string;
  director: string;
  cast: string[];
  releaseDate: string;
  trailerUrl: string;
  upcoming: boolean;
}

export interface Theater {
  id: number;
  name: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Showtime {
  id: number;
  movieId: number;
  theaterId: number;
  date: string;
  time: string;
  price: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: 'standard' | 'premium' | 'vip';
  status: 'available' | 'reserved' | 'selected';
  price: number;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  avatar?: string;
  bookings: number[];
}

export interface Booking {
  id: number;
  userId: number;
  movieId: number;
  showtimeId: number;
  seats: string[];
  totalPrice: number;
  bookingDate: string;
  bookingId: string;
}

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imagePath: string;
  category: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: number;
}

export const users: User[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    password: "password123",
    role: "user",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bookings: [101, 102]
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane@example.com",
    password: "password123",
    role: "user",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    bookings: [103]
  },
  {
    id: 3,
    firstName: "Admin",
    lastName: "User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
    bookings: []
  }
];

export const bookings: Booking[] = [
  {
    id: 101,
    userId: 1,
    movieId: 1,
    showtimeId: 3,
    seats: ["C5", "C6"],
    totalPrice: 29.98,
    bookingDate: "2024-06-15",
    bookingId: "MT123456"
  },
  {
    id: 102,
    userId: 1,
    movieId: 2,
    showtimeId: 7,
    seats: ["D8"],
    totalPrice: 12.99,
    bookingDate: "2024-06-10",
    bookingId: "MT654321"
  },
  {
    id: 103,
    userId: 2,
    movieId: 4,
    showtimeId: 12,
    seats: ["F4", "F5", "F6"],
    totalPrice: 44.97,
    bookingDate: "2024-06-17",
    bookingId: "MT789012"
  }
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Two",
    posterPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8P5uwVwfPAX9FnmiLtcFECf8l28lS9FN-g&s",
    backdropPath: "https://poundarts.org.uk/wp-content/uploads/2024/05/Dune-Part-Two.jpg",
    genres: ["Science Fiction", "Adventure"],
    rating: 8.5,
    synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    duration: "2h 46m",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
    releaseDate: "2024-03-01",
    trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w",
    upcoming: false
  },
  {
    id: 2,
    title: "The Batman",
    posterPath: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=2070&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
    genres: ["Action", "Crime", "Drama"],
    rating: 7.8,
    synopsis: "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption.",
    duration: "2h 56m",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Jeffrey Wright", "Colin Farrell"],
    releaseDate: "2022-03-04",
    trailerUrl: "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    upcoming: false
  },
  {
    id: 3,
    title: "Deadpool & Wolverine",
    posterPath: "https://images.unsplash.com/photo-1608889175157-718b6205a50d?q=80&w=2080&auto=format&fit=crop",
    backdropPath: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    genres: ["Action", "Comedy", "Science Fiction"],
    rating: 8.1,
    synopsis: "Wolverine teams up with the mouthy mercenary Deadpool for an adventure through time and space.",
    duration: "2h 7m",
    director: "Shawn Levy",
    cast: ["Ryan Reynolds", "Hugh Jackman", "Emma Corrin", "Morena Baccarin"],
    releaseDate: "2024-07-26",
    trailerUrl: "https://www.youtube.com/watch?v=GDGdS7rcB4k",
    upcoming: true
  },
  {
    id: 4,
    title: "Oppenheimer",
    posterPath: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop",
    backdropPath: "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/07/lich-chieu-phim-oppenheimer-thumbnail.jpg",
    genres: ["Drama", "History", "Thriller"],
    rating: 8.3,
    synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    duration: "3h 0m",
    director: "Christopher Nolan",
    cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
    releaseDate: "2023-07-21",
    trailerUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg",
    upcoming: false
  },
  {
    id: 5,
    title: "Furiosa: A Mad Max Saga",
    posterPath: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=2070&auto=format&fit=crop", 
    backdropPath: "https://images.unsplash.com/photo-1603475451289-53193c16630f?q=80&w=2070&auto=format&fit=crop",
    genres: ["Action", "Adventure", "Science Fiction"],
    rating: 7.1,
    synopsis: "The origin story of renegade warrior Furiosa before her encounter with Mad Max.",
    duration: "2h 28m",
    director: "George Miller",
    cast: ["Anya Taylor-Joy", "Chris Hemsworth", "Tom Burke", "Yahya Abdul-Mateen II"],
    releaseDate: "2024-05-24",
    trailerUrl: "https://www.youtube.com/watch?v=XdKzUbAiswE",
    upcoming: false
  },
  {
    id: 6,
    title: "Joker: Folie à Deux",
    posterPath: "https://iguov8nhvyobj.vcdn.cloud/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/r/s/rsz_poster_payoff_joker_folie_a_deux_5_1_.jpg",
    backdropPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOeNGU_BvZSzKjfGL4X7SFEayeMGWSUfGChg&s", 
    genres: ["Crime", "Drama", "Thriller"],
    rating: 7.5,
    synopsis: "Arthur Fleck, now locked up in Arkham Asylum, forms a musical romance with fellow inmate Harley Quinn.",
    duration: "2h 18m",
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix", "Lady Gaga", "Zazie Beetz", "Brendan Gleeson"],
    releaseDate: "2024-10-04",
    trailerUrl: "https://www.youtube.com/watch?v=03ymBj144ng",
    upcoming: true
  }
];

export const theaters: Theater[] = [
  {
    id: 1,
    name: "Cineplex Downtown",
    location: "123 Main St, Downtown",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  {
    id: 2,
    name: "MovieWorld IMAX",
    location: "456 Park Ave, Central District",
    coordinates: {
      lat: 40.7305,
      lng: -73.9925
    }
  },
  {
    id: 3,
    name: "Starplex Cinemas",
    location: "789 Broadway, Theater District",
    coordinates: {
      lat: 40.7589,
      lng: -73.9851
    }
  }
];

export const showtimes: Showtime[] = [
  // Today
  {
    id: 1,
    movieId: 1,
    theaterId: 1,
    date: new Date().toISOString().split('T')[0],
    time: "10:00 AM",
    price: 12.99
  },
  {
    id: 2,
    movieId: 1,
    theaterId: 1,
    date: new Date().toISOString().split('T')[0],
    time: "1:30 PM",
    price: 12.99
  },
  {
    id: 3,
    movieId: 1,
    theaterId: 1,
    date: new Date().toISOString().split('T')[0],
    time: "6:45 PM",
    price: 14.99
  },
  {
    id: 4,
    movieId: 1,
    theaterId: 2,
    date: new Date().toISOString().split('T')[0],
    time: "11:15 AM",
    price: 15.99
  },
  {
    id: 5,
    movieId: 1,
    theaterId: 2,
    date: new Date().toISOString().split('T')[0],
    time: "5:20 PM",
    price: 17.99
  },
  {
    id: 6,
    movieId: 2,
    theaterId: 1,
    date: new Date().toISOString().split('T')[0],
    time: "12:00 PM",
    price: 12.99
  },
  {
    id: 7,
    movieId: 2,
    theaterId: 1,
    date: new Date().toISOString().split('T')[0],
    time: "4:15 PM",
    price: 12.99
  },
  {
    id: 8,
    movieId: 2,
    theaterId: 3,
    date: new Date().toISOString().split('T')[0],
    time: "3:30 PM",
    price: 13.99
  },
  {
    id: 9,
    movieId: 2,
    theaterId: 3,
    date: new Date().toISOString().split('T')[0],
    time: "7:45 PM",
    price: 15.99
  },
  // Tomorrow
  {
    id: 10,
    movieId: 1,
    theaterId: 1,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "11:00 AM",
    price: 12.99
  },
  {
    id: 11,
    movieId: 1,
    theaterId: 1,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "2:30 PM",
    price: 12.99
  },
  {
    id: 12,
    movieId: 1,
    theaterId: 1,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "7:45 PM",
    price: 14.99
  },
  {
    id: 13,
    movieId: 4,
    theaterId: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "10:45 AM",
    price: 15.99
  },
  {
    id: 14,
    movieId: 4,
    theaterId: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "3:20 PM",
    price: 17.99
  },
  {
    id: 15,
    movieId: 4,
    theaterId: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "8:00 PM",
    price: 17.99
  },
  {
    id: 16,
    movieId: 5,
    theaterId: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "1:15 PM",
    price: 13.99
  },
  {
    id: 17,
    movieId: 5, 
    theaterId: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
    time: "6:30 PM",
    price: 15.99
  },
  // Day after tomorrow
  {
    id: 18,
    movieId: 2,
    theaterId: 1,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "12:30 PM",
    price: 12.99
  },
  {
    id: 19,
    movieId: 2,
    theaterId: 1,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "5:15 PM",
    price: 12.99
  },
  {
    id: 20,
    movieId: 2,
    theaterId: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "2:30 PM",
    price: 15.99
  },
  {
    id: 21,
    movieId: 5,
    theaterId: 2,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "7:20 PM",
    price: 17.99
  },
  {
    id: 22,
    movieId: 4,
    theaterId: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "1:30 PM",
    price: 13.99
  },
  {
    id: 23,
    movieId: 4,
    theaterId: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "4:45 PM",
    price: 13.99
  },
  {
    id: 24,
    movieId: 4,
    theaterId: 3,
    date: new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0],
    time: "8:15 PM",
    price: 15.99
  },
];

export const generateSeats = (rows: number, seatsPerRow: number): Seat[] => {
  const seats: Seat[] = [];
  const rowLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < rows; i++) {
    const rowLetter = rowLetters[i];
    for (let j = 1; j <= seatsPerRow; j++) {
      let type: 'standard' | 'premium' | 'vip';
      let price: number;

      // Premium seats in the middle rows
      if (i >= Math.floor(rows / 4) && i < Math.floor(rows * 3 / 4)) {
        type = 'premium';
        price = 14.99;
      } 
      // VIP seats in the back rows
      else if (i >= Math.floor(rows * 3 / 4)) {
        type = 'vip';
        price = 19.99;
      } 
      // Standard seats in the front rows
      else {
        type = 'standard';
        price = 9.99;
      }

      // Random availability for demo purposes
      const randomStatus = Math.random() < 0.2 ? 'reserved' : 'available';

      seats.push({
        id: `${rowLetter}${j}`,
        row: rowLetter,
        number: j,
        type,
        status: randomStatus,
        price
      });
    }
  }

  return seats;
};

// Create a sample set of seats
export const sampleSeats = generateSeats(8, 12);

// Articles and news
export const articles: Article[] = [
  {
    id: 1,
    title: "Top 10 phim bom tấn đáng mong đợi nhất năm 2024",
    excerpt: "Tổng hợp các siêu phẩm điện ảnh sẽ ra mắt trong năm 2024, từ phim siêu anh hùng đến khoa học viễn tưởng và hành động.",
    content: "Năm 2024 hứa hẹn sẽ là một năm bùng nổ của điện ảnh thế giới với sự trở lại của nhiều thương hiệu phim lớn và các tác phẩm được mong đợi từ lâu...",
    imagePath: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&auto=format&fit=crop",
    category: "Tổng hợp",
    author: "Minh Đức",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "2024-05-15",
    readTime: 8
  },
  {
    id: 2,
    title: "Deadpool & Wolverine công bố trailer chính thức: Màn kết hợp không tưởng",
    excerpt: "Ryan Reynolds và Hugh Jackman cuối cùng cũng xuất hiện cùng nhau trong trailer mới nhất của Deadpool & Wolverine.",
    content: "Sau nhiều năm chờ đợi, fan hâm mộ Marvel cuối cùng cũng được chiêm ngưỡng màn kết hợp giữa hai nhân vật được yêu thích nhất: Deadpool và Wolverine...",
    imagePath: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop",
    category: "Tin tức",
    author: "Thu Trang",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "2024-06-01",
    readTime: 5
  },
  {
    id: 3,
    title: "Phỏng vấn đạo diễn Christopher Nolan về dự án phim mới",
    excerpt: "Sau thành công của Oppenheimer, đạo diễn Christopher Nolan tiết lộ về kế hoạch tiếp theo và quan điểm về tương lai của điện ảnh.",
    content: "Christopher Nolan, đạo diễn từng đoạt giải Oscar với Oppenheimer, vừa chia sẻ trong một cuộc phỏng vấn độc quyền về dự án phim mới của ông...",
    imagePath: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=800&auto=format&fit=crop",
    category: "Phỏng vấn",
    author: "Hoàng Nam",
    authorAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "2024-05-28",
    readTime: 12
  },
  {
    id: 4,
    title: "Đánh giá phim Furiosa: A Mad Max Saga - Hành trình đầy bão táp",
    excerpt: "Anya Taylor-Joy tỏa sáng trong vai Furiosa, mang đến một câu chuyện nguồn gốc đầy mãn nhãn và cảm xúc.",
    content: "Furiosa: A Mad Max Saga là một trong những bộ phim được mong đợi nhất năm 2024, tiếp nối thành công của Mad Max: Fury Road. Liệu bộ phim có xứng đáng với sự kỳ vọng?...",
    imagePath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&auto=format&fit=crop",
    category: "Đánh giá",
    author: "Minh Tú",
    authorAvatar: "https://randomuser.me/api/portraits/women/29.jpg",
    date: "2024-06-05",
    readTime: 10
  },
  {
    id: 5,
    title: "Cách các hiệu ứng kỹ xảo đang thay đổi ngành công nghiệp điện ảnh",
    excerpt: "Tìm hiểu về công nghệ CGI mới nhất và cách chúng đang định hình lại cách các bộ phim được sản xuất.",
    content: "Từ The Volume của The Mandalorian đến công nghệ de-aging, bài viết này sẽ đi sâu vào cách các studio lớn đang áp dụng công nghệ tiên tiến...",
    imagePath: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop",
    category: "Công nghệ",
    author: "Anh Tuấn",
    authorAvatar: "https://randomuser.me/api/portraits/men/45.jpg",
    date: "2024-05-20",
    readTime: 15
  },
  {
    id: 6,
    title: "Những bí mật hậu trường của các bộ phim nổi tiếng",
    excerpt: "Khám phá những câu chuyện thú vị và ít được biết đến từ hậu trường của các bộ phim bom tấn gần đây.",
    content: "Từ tai nạn bất ngờ đến những khoảnh khắc ứng biến tạo nên cảnh phim kinh điển, bài viết này sẽ tiết lộ những điều thú vị mà người hâm mộ có thể chưa biết...",
    imagePath: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop",
    category: "Hậu trường",
    author: "Hà Linh",
    authorAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    date: "2024-06-10",
    readTime: 7
  }
]; 