import React from 'react';

const ProjectCard = ({ title, description, screenshots, video, apk }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Screenshots */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {screenshots.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`screenshot-${idx + 1}`}
            className="rounded border border-gray-300"
          />
        ))}
      </div>

      {/* Video Demo */}
      {/* {video && (
        // <div className="mb-6">
        //   <video controls className="w-full rounded">
        //     <source src={video} type="video/mp4" />
        //     Your browser does not support the video tag.
        //   </video>
        // </div>
      )} */}

      {/* Download APK Button */}
      {apk && (
        <a
          href={apk}
          download
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Download APK
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
