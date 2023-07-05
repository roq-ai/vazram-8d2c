import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { businessValidationSchema } from 'validationSchema/businesses';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getBusinesses();
    case 'POST':
      return createBusiness();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getBusinesses() {
    const data = await prisma.business
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'business'));
    return res.status(200).json(data);
  }

  async function createBusiness() {
    await businessValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.post?.length > 0) {
      const create_post = body.post;
      body.post = {
        create: create_post,
      };
    } else {
      delete body.post;
    }
    if (body?.social_media_account?.length > 0) {
      const create_social_media_account = body.social_media_account;
      body.social_media_account = {
        create: create_social_media_account,
      };
    } else {
      delete body.social_media_account;
    }
    const data = await prisma.business.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
