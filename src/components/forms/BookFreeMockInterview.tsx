import React from 'react';

const BookFreeMockInterview = () => {
  return (
    <form className="space-y-4">
      <input className="w-full rounded border px-3 py-2" placeholder="Name" />
      <input className="w-full rounded border px-3 py-2" type="email" placeholder="Email" />
      <textarea className="w-full rounded border px-3 py-2" placeholder="Message" rows={3} />
      <input className="w-full rounded border px-3 py-2" placeholder="Resume Link" />
      <input className="w-full rounded border px-3 py-2" placeholder="LinkedIn Profile" />
      <input className="w-full rounded border px-3 py-2" type="date" placeholder="Preferred Date" />
      <input className="w-full rounded border px-3 py-2" type="time" placeholder="Preferred Time" />
      <p className="text-xs text-gray-500">Time should be between 11:00 AM and 6:00 PM</p>
      <button type="submit" className="w-full rounded bg-blue-600 text-white py-2 hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default BookFreeMockInterview;
