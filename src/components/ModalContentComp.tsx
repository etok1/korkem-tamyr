import type { ContentItem } from "../utils/types";

interface ModalContentCompProps {
  item: ContentItem;
  key?: string | number; 
  stylesText:string;
   stylesLink:string
}

export default function ModalContentComp({ item, key, stylesText, stylesLink }: ModalContentCompProps) {
  if (item.type === 'text') {
    return (
      <span 
        key={key} 
        className={stylesText}
      >
        {item.value}
      </span>
    );
  } else if (item.type === 'link') {
    return (
      <a
        key={key}
        href={item.url}
        download 
        className={stylesLink}
      >
        {item.text}
      </a>
    );
  }
  
  return null;
}