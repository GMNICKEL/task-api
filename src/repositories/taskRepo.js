import prisma from '../config/db.js';

export async function findAll(filters = {}) {
  const where = {};

  if (filters.completed !== undefined) {
    where.completed = filters.completed;
  }

  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}