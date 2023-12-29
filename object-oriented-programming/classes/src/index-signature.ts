// Index Signature Notes

class SeatAssignment {
    // index signature property
    [seatNumber: string]: string;
}

function testIndexSignatures(): void {
    const seats: SeatAssignment = new SeatAssignment();
    seats.A1 = 'George';
    seats.A2 = 'Alfred';
    seats.A3 = 'John';
    seats['Box 5'] = 'The Opera Ghost';
    seats[45.6] = 'Carol'; // this will NOT cause a compiler error
    seats[parseFloat('56.34')] = 'Howard'; // this will NOT cause a compiler error
    // seats.A4 = 45.92; // this will cause a compiler error (the assigned value must be type `string`)

    console.log(seats);
}

export { testIndexSignatures };
