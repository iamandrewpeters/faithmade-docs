import React from 'react';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  const isIframe = url.includes('iframe') || url.includes('embed') || (!url.endsWith('.mp4') && !url.endsWith('.webm') && !url.endsWith('.mov'));

  return (
    <div style={{marginBottom: '1.5rem'}}>
      {title && (
        <p style={{fontSize: '0.85rem', color: '#64748b', marginBottom: '8px', fontWeight: 500}}>
          {title}
        </p>
      )}
      {isIframe ? (
        <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', border: '1px solid #e2e8f0'}}>
          <iframe
            src={url}
            title={title || 'Video'}
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          />
        </div>
      ) : (
        <video
          controls
          style={{width: '100%', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'block'}}
        >
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
