import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Additive } from './additive.model'
import { Op } from 'sequelize'

@Injectable()
export class AdditivesService {
  constructor(
    @InjectModel(Additive)
    private additiveModel: typeof Additive,
  ) {}

  getHello(): string {
    return 'Hello World!'
  }

  async findManyByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<Additive[]> {
    return await this.additiveModel.findAll({
      logging: console.log,
      where: {
        dealedAt: {
          [Op.between]: [startDate, endDate],
        },
      },
    })
  }
}
