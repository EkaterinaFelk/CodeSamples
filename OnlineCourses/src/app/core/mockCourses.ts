import { Course } from './models/course';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Cats',
    duration: 128,
    date: new Date(2012,10,12),
    description: 'In this tutorial, youll create a HeroService that all application classes can use to get heroes. Instead of creating that service with new, youll rely on Angular dependency injection to inject it into the HeroesComponent constructor.',
    authorsId: [1,2]
  },
  {
    id: 2,
    title: 'Dogs',
    duration: 28,
    date: new Date(2013,4,24),
    description: 'Notice that the new service imports the Angular Injectable symbol and annotates the class with the @Injectable() decorator. This marks the class as one that participates in the dependency injection system. The HeroService class is going to provide an injectable service, and it can also have its own injected dependencies. It doesnt have any dependencies yet, but it will soon.',
    authorsId: [1,2]
  },
  {
    id: 3,
    title: 'Nature',
    duration: 150,
    date: new Date(2015,4,5),
    description: 'Removing data access from components means you can change your mind about the implementation anytime, without touching any components. They dont know how the service works.',
    authorsId: [1,2]
  }
];
