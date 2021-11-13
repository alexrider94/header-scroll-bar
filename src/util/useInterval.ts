import { useEffect, useState } from 'react';

export default (delay: number, repeat: boolean) => {
  const [event, setEvent] = useState<(() => void) | null>(null);

  useEffect(() => {
    if (event) {
      const timeEvt = setTimeout(event, delay);

      return () => clearTimeout(timeEvt);
    }
    return () => null;
  }, [repeat, event]);

  return [event, setEvent];
};
