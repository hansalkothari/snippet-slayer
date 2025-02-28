'use client';

import { useState } from 'react';

interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptance: string;
  category: string;
  status: 'Solved' | 'Attempted' | 'Todo';
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    acceptance: "48.5%",
    category: "Array",
    status: "Todo"
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: "Medium",
    acceptance: "39.2%",
    category: "Linked List",
    status: "Todo"
  },
  {
    id: 3,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    acceptance: "33.8%",
    category: "String",
    status: "Todo"
  },
  // Add more problems as needed
];

export default function Problems() {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredProblems = problems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty.toLowerCase() === difficultyFilter;
    const matchesStatus = statusFilter === 'all' || problem.status.toLowerCase() === statusFilter;
    const matchesCategory = categoryFilter === 'all' || problem.category.toLowerCase() === categoryFilter;
    return matchesSearch && matchesDifficulty && matchesStatus && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hard': return 'text-red-600';
      default: return '';
    }
  };

  return (
    <div className=" contaier mx-auto px-4 py-8 w-full justify-between">
      <div className="mb-6 flex flex-col md:flex-row gap-4 w-full justify-between">
        
          <input
            type="text"
            placeholder="Search problems..."
            className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
          />
        
          <select
            className="w-1/6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        

          <select
            className="w-1/6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="solved">Solved</option>
            <option value="attempted">Attempted</option>
            <option value="todo">Todo</option>
          </select>

          <select
            className="w-1/6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="array">Array</option>
            <option value="linked-list">Linked List</option>
            <option value="string">String</option>
          </select>
       
      </div>

      {/* Problems Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Difficulty
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Acceptance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
            {filteredProblems.map((problem) => (
              <tr key={problem.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${problem.status === 'Solved' ? 'bg-green-100 text-green-800' :
                    problem.status === 'Attempted' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'}`}>
                    {problem.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {problem.id}. {problem.title}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`${getDifficultyColor(problem.difficulty)} text-sm`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {problem.acceptance}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  {problem.category}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 