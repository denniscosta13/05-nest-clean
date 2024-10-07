import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Additive } from './additive.model'
import { AdditivesService } from './additive.service'
import { AdditivesController } from './additive.controller'

@Module({
  imports: [SequelizeModule.forFeature([Additive])],
  providers: [AdditivesService],
  controllers: [AdditivesController],
  // exports: [AdditivesService],
})
export class AdditivesModule {}
