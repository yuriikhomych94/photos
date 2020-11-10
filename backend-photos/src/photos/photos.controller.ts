import { Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Photos } from './photos.entity';
import { PhotosService } from './photos.service';


@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) { }




  @Get("getAllPhotos")
  public async getAll() {
    return await this.photosService.getAll();
  } 



  @Post("uploadImage")
  @UseInterceptors(FileInterceptor('file'))
  public async post(@UploadedFile() file): Promise<Photos> {

    const photo = new Photos()
    photo.name = file.originalname
    photo.img = file.buffer

    return this.photosService.create(photo);
  }  






































  // GET
  // @Get()
  // getAllPhotos(): Promise<Photos[]> {
  //   return this.photosService.getAll();
  // }



  // POST
  // @Post('upload')
  // @UseInterceptors(FileInterceptor('photo', {
  //   dest: "./upload",
  //   })
  // )







  // @Post('upload')
  // @UseInterceptors(FileInterceptor('file', {
  //   storage: diskStorage ({
  //     destination: './upload',
  //     filename: (req, file, cd) => {
  //       const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
  //       const extension: string = path.parse(file.originalname).ext;

  //       cd(null, `${filename}${extension}`)
  //     }
  //   })
  // }))

  // uploadFile(@UploadedFile() file): Observable<Object> {
  //   console.log(file);
  //   return of({imagePath: file.filename})
  // }

}

















 // GET ONE PHOTOS
  // @Get('id')
  // getOnePhotos(@Param('id') id: string): Promise<Photos> {
  //   return this.photosService.findOne(id);
  // }

  // /////////////////////////////////////////////


  // create 

  // createPhotos(@Body() createDto: CreateDto): Promise<Photos> {
  //   const photos = new Photos();
  //   photos.file = createDto.file;
  //   return this.photosService.create(photos);
  // }



  // @Put()
  // updatePhotos(@Param('id') id: string,
  //   @Body() photos: UpdateDto): UpdateDto {
  //   return photos;
  // }
  // ////////////////////////////////////////////////////




  // DELETE PHOTOS
  // @Delete(':id')
  // deletePhotos(@Param('id') id: string): Promise<void> {
  //   return this.photosService.remove(id);
  // }