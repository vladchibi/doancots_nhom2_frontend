# Booking Flow Documentation

## Overview

The booking flow consists of three main pages that guide users through the movie ticket booking process:

1. **Booking Page** - Seat selection
2. **Checkout Page** - Customer information and payment
3. **Confirmation Page** - Booking confirmation and ticket details

## Flow Architecture

```
Movies Page → Movie Detail → Booking → Checkout → Confirmation
     ↓            ↓           ↓         ↓          ↓
  Browse      Select Show   Choose    Enter      View
  Movies      Time/Date     Seats     Details    Ticket
```

## 1. Booking Page (`/booking/[movieId]`)

### Features
- ✅ **Movie Information Display** - Shows movie poster, title, genres, duration
- ✅ **Showtime Details** - Theater name, location, date, time
- ✅ **Interactive Seat Map** - Visual seat selection with real-time updates
- ✅ **Seat Status Indicators** - Available, Selected, Booked
- ✅ **Price Calculation** - Real-time total price updates
- ✅ **Booking Summary** - Selected seats and total cost

### URL Structure
```
/booking/[movieId]?showtime=[showtimeId]
```

### API Endpoints Used
- `GET /movies/{movieId}` - Movie details
- `GET /show-times/{showtimeId}` - Showtime and theater info
- `GET /seats/theater/{theaterId}` - Available seats

### State Management
```typescript
interface SeatWithStatus extends Seat {
  isBooked?: boolean;
  isSelected?: boolean;
}

const [seats, setSeats] = useState<SeatWithStatus[]>([]);
const [selectedSeats, setSelectedSeats] = useState<SeatWithStatus[]>([]);
```

### Data Flow
1. Fetch movie data from API
2. Fetch showtime and theater data
3. Fetch seats for the theater
4. Add booking status to seats (mock for now)
5. Handle seat selection/deselection
6. Calculate total price
7. Store booking data in sessionStorage
8. Navigate to checkout

## 2. Checkout Page (`/checkout`)

### Features
- ✅ **Customer Information Form** - Name, email, phone validation
- ✅ **Payment Method Selection** - Credit, Debit, PayPal options
- ✅ **Order Summary** - Movie details, seats, total price
- ✅ **Form Validation** - Real-time error handling
- ✅ **Payment Processing** - Simulated payment flow

### Data Sources
- **sessionStorage** - Booking data from previous step
- **Form State** - Customer information and payment method

### Validation Rules
```typescript
interface CustomerInfo {
  firstName: string;    // Required
  lastName: string;     // Required
  email: string;        // Required, valid email format
  phone: string;        // Required
}
```

### Payment Methods
- Credit Card 💳
- Debit Card 💳  
- PayPal 🅿️

### Data Flow
1. Retrieve booking data from sessionStorage
2. Validate customer information form
3. Process payment (simulated)
4. Generate booking code
5. Store confirmation data in sessionStorage
6. Navigate to confirmation

## 3. Confirmation Page (`/confirmation`)

### Features
- ✅ **Success Confirmation** - Visual success indicator
- ✅ **Booking Details** - Complete booking information
- ✅ **Ticket Information** - Seats, showtime, theater
- ✅ **Customer Details** - Name, email, phone
- ✅ **Payment Summary** - Method and total amount
- ✅ **Email Confirmation** - Simulated email sending
- ✅ **Ticket Download** - Download functionality (placeholder)
- ✅ **Important Notes** - Theater policies and instructions

### Data Sources
- **sessionStorage** - Confirmation data from checkout

### Actions Available
- Download Ticket (PDF generation placeholder)
- Resend Email (if not automatically sent)
- Back to Movies (clears session data)

## Data Flow Between Pages

### 1. Booking → Checkout
```typescript
const bookingData = {
  movieId: Number(params.movieId),
  showtimeId: showtime.id,
  seats: selectedSeats,
  totalPrice: getTotalPrice(),
  movie: movie,
  theater: theater,
  showtime: showtime,
};

sessionStorage.setItem('bookingData', JSON.stringify(bookingData));
router.push('/checkout');
```

### 2. Checkout → Confirmation
```typescript
const confirmationData = {
  ...bookingData,
  customerInfo,
  paymentMethod,
  bookingCode: `BK${Date.now()}`,
  bookingDate: new Date().toISOString(),
};

sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));
sessionStorage.removeItem('bookingData');
router.push('/confirmation');
```

## Error Handling

### Missing Data
- Redirect to movies page if no booking/confirmation data
- Show loading spinner while fetching API data
- Display error messages for failed API calls

### Form Validation
- Real-time validation with error messages
- Prevent submission with invalid data
- Clear errors when user corrects input

### Network Issues
- Retry mechanisms for API calls
- Graceful degradation for failed requests
- User-friendly error messages

## Security Considerations

### Data Storage
- Use sessionStorage (cleared on tab close)
- No sensitive payment data stored locally
- Clear data after successful completion

### Validation
- Client-side validation for UX
- Server-side validation required for security
- Sanitize all user inputs

## Testing

### Manual Testing Flow
1. Navigate to `/booking/1?showtime=1`
2. Select seats and continue to checkout
3. Fill customer information and select payment
4. Complete booking and view confirmation
5. Test all error scenarios

### Test Data
Use the `BookingFlowTest` component for quick testing:
- Mock booking data
- Mock confirmation data
- Direct navigation to any step

## Future Enhancements

### Planned Features
- [ ] Real payment integration (Stripe, PayPal)
- [ ] PDF ticket generation
- [ ] Email service integration
- [ ] Real-time seat availability updates
- [ ] Booking history and management
- [ ] Mobile app deep linking
- [ ] Social sharing of bookings

### API Integration
- [ ] Real booking creation endpoint
- [ ] Payment processing webhook
- [ ] Email notification service
- [ ] Seat locking mechanism
- [ ] Booking cancellation system

## Performance Optimizations

### Current Optimizations
- SWR for efficient data fetching
- sessionStorage for client-side state
- Optimistic UI updates for seat selection

### Future Optimizations
- Image optimization for movie posters
- Lazy loading for seat maps
- Caching strategies for theater data
- Progressive Web App features
