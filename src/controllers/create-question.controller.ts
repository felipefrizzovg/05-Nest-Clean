import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const createQuestionBodySchema = z.object({
  email: z.string().email(),
  password: z.string()
})

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor (
    private prisma: PrismaService,
  ) {}
  
  @Post()
  async handle(@Body() body: CreateQuestionBodySchema) {
    return "ok"
  }
}