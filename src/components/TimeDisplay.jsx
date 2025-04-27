export default function TimeDisplay({ time }) {
    const formatTime = (milliseconds) => {
      const minutes = Math.floor(milliseconds / 60000);
      const seconds = Math.floor((milliseconds % 60000) / 1000);
      const centiseconds = Math.floor((milliseconds % 1000) / 10);
  
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(centiseconds).padStart(2, "0")}`;
    };
  
    return (
      <div className="text-6xl font-mono text-gray-700 mb-8">
        {formatTime(time)}
      </div>
    );
  }
  