const cloudName = 'dbelrfazt';

export function getMediaUrl(type: 'audio' | 'image', chapter: string, day: number): string {
  const folder = 'meditations';
  const fileName = `${chapter}_day_${day}_${type}`;
  const extension = type === 'audio' ? '.wav' : '.png';
  
  return `https://res.cloudinary.com/${cloudName}/${type === 'audio' ? 'video' : 'image'}/upload/${folder}/${fileName}${extension}`;
}