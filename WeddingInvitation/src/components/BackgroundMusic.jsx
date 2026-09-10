import { useEffect, useRef } from 'react';

const musicSrc = `${import.meta.env.BASE_URL}music.mp3`;

export function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const tryPlay = async () => {
      try {
        await audio.play();
        return true;
      } catch {
        return false;
      }
    };

    let interactionFallbackAttached = false;

    const removeInteractionFallback = () => {
      if (!interactionFallbackAttached) return;

      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      interactionFallbackAttached = false;
    };

    const handleFirstInteraction = async () => {
      const started = await tryPlay();
      if (started) removeInteractionFallback();
    };

    const attachInteractionFallback = () => {
      if (interactionFallbackAttached) return;

      window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
      window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
      window.addEventListener('keydown', handleFirstInteraction);
      interactionFallbackAttached = true;
    };

    tryPlay().then((started) => {
      if (!started) attachInteractionFallback();
    });

    return () => {
      removeInteractionFallback();
      audio.pause();
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={musicSrc}
      autoPlay
      loop
      preload="auto"
      playsInline
      aria-hidden="true"
    />
  );
}
