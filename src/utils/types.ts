export interface podcastProps {
  id: number;
  name: string;
  duration: string;
  text: string;
  image: string;
  audio?: string;
}

export interface NavigationItem {
  name: string;
  link?: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  link: string;
}

export type GamesType = {
  id: number;
  bg: string;
  icon: React.ReactElement;
  onClick: () => void;
  giveIdToParent: (id: number) => void;
};

export interface historyType {
  icon: React.ReactElement;
  heading: string;
  text: string;
  link: string;
}

export interface memberType {
  image: string;
  name: string;
  position: string;
  color: string;
  circleColor: string;
  nickname: string;
  link: string;
}

export type ArticleSection = {
  title: string;
  text: string;
};

export type ArticleContent = {
  sections: ArticleSection[];
};

export type ArticleType = {
  id: number;
  img: string;
  name: string;
  text: string;
  content: ArticleContent;
};

export type Category = {
  heading: string;
  paragraph: string;
};

export type ArticleGroup = {
  id: string;
  category: Category;
  articles: ArticleType[];
};

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
