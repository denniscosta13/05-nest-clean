import { Body, Controller, Post } from '@nestjs/common'
import { AdditivesService } from './additive.service'
import { Additive } from './additive.model'
import { FetchAdditives } from './dto/fetch-additives.dto'

@Controller('additive')
export class AdditivesController {
  constructor(private readonly additiveService: AdditivesService) {}

  @Post()
  async findManyByDateRange(
    @Body() fetchAdditivesDto: FetchAdditives,
  ): Promise<Additive[]> {
    return await this.additiveService.findManyByDateRange(
      fetchAdditivesDto.startDate,
      fetchAdditivesDto.endDate,
    )
  }
}
