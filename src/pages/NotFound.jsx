import { Link, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect } from 'react';

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-100">
      <Player
        autoplay
        loop
        src="/lottie/404-lottie.json"
        className="w-64 h-64 mb-6"
      />
      <h1 className="text-4xl font-bold text-blue-700 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        Redirecting you to the homepage in 5 seconds...
      </p>
      <Link to="/">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Go Home Now
        </button>
      </Link>
    </div>
  );
}
