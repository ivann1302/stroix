import { Project, ProjectStatus } from '@/entities/project';

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'ЖК Солнечный',
    address: 'ул. Ленина, 42',
    status: ProjectStatus.Active,
    budget: 4_500_000,
    createdAt: '2024-01-10',
  },
  {
    id: '2',
    name: 'Офис Центр',
    address: 'пр. Победы, 15',
    status: ProjectStatus.Active,
    budget: 1_200_000,
    createdAt: '2024-02-05',
  },
  {
    id: '3',
    name: 'Склад №3',
    address: 'ул. Промышленная, 8',
    status: ProjectStatus.Completed,
    budget: 800_000,
    createdAt: '2023-11-20',
  },
  {
    id: '4',
    name: 'Коттедж Берёзовый',
    address: 'пос. Берёзовка, д. 14',
    status: ProjectStatus.Completed,
    budget: 3_100_000,
    createdAt: '2023-09-01',
  },
  {
    id: '5',
    name: 'Ресторан "Терраса"',
    address: 'ул. Садовая, 3',
    status: ProjectStatus.Archived,
    budget: 600_000,
    createdAt: '2023-06-15',
  },
]