import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Masks",
    imageUrl: "https://i.ibb.co/3hJv0Fz/52.jpg",
    route: 'shop/masks',
  },
  {
    id: 3,
    title: "Kitchen",
    imageUrl: "https://i.ibb.co/4MgwVgx/53.jpg",
    route: 'shop/kitchen',
  },
  {
    id: 4,
    title: "Bags",
    imageUrl: "https://i.ibb.co/pvh0MQ2/1.jpg",
    route: 'shop/bags',
  },
  {
    id: 5,
    title: "Personal",
    imageUrl: "https://i.ibb.co/Rym8mV4/54.jpg",
    route: 'shop/personal%20health',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
