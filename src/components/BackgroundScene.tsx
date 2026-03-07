const decorations = [
  { id: 'bubble-1', size: 180, top: '8%', left: '5%', delay: 0 },
  { id: 'bubble-2', size: 120, top: '18%', right: '8%', delay: 4 },
  { id: 'bubble-3', size: 220, bottom: '10%', left: '12%', delay: 2 },
  { id: 'bubble-4', size: 140, bottom: '18%', right: '15%', delay: 6 },
];

export function BackgroundScene() {
  return (
    <div className="background-scene" aria-hidden="true">
      <div className="background-gradient" />

      {decorations.map((item) => (
        <div
          key={item.id}
          className="bg-orb"
          style={{
            width: item.size,
            height: item.size,
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

