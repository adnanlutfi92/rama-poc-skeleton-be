import { ApiProperty } from '@nestjs/swagger';
import { ILoginResponsePay } from 'src/services/interfaces/login.interface';

export class LoginResponsePayDto implements ILoginResponsePay {
  @ApiProperty({
    example:
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjMzOUExQTc0NDRCMjUxNDkyODg4MEY4N0I5QThERUI0IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MjcyNDI0MzEsImV4cCI6MTcyNzI0NjAzMSwiaXNzIjoiaHR0cHM6Ly9wYXkta2Fpcm9zLnNpbG9hbWhvc3BpdGFscy5jb20iLCJjbGllbnRfaWQiOiJDdXN0b21lckNsaWVudCIsInN1YiI6InFhLnNwdiIsImF1dGhfdGltZSI6MTcyNzI0MjQzMSwiaWRwIjoibG9jYWwiLCJqdGkiOiJDMTUzODVBMTc0RTEzNkREODY4QUM4OTI3QjRENEU2MCIsImlhdCI6MTcyNzI0MjQzMSwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbImN1c3RvbSJdfQ.zU-zxr_mNnL3Fl1Xtao70IvVNnrTCAIZ0HQbV0WCagpEBxiKdrcT9rNnTdwvOdUAjXSgVJb93I_ivM9UEraZipYFskY_cVg2Bw9lm48uLGFkEt1Aim-iq5Lo0Q-YJ8-oY74Eb0jAXSYjgoEkUXJj073mt-xRB8L2m9X3M_XZdpuZL3S3CvPbK8jOJqX3Jts-6eKEYTt9mr6-h32AIuJUZguu-kFJNDARO8GPiGiPvELTYUiQ0OW556BymFbrNGzNKOxfzrtrBqbTsf1DD5o472H60r3kjrX_8Lat6qd_0SQFAKAlb2e79c78x-73RuDc431-X8dpjGYF9qiC8M7E-g',
  })
  access_token: string;

  @ApiProperty({ example: 3600 })
  expires_in: number;

  @ApiProperty({ example: 'Bearer' })
  token_type: string;

  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRfaWQiOiJDdXN0b21lckNsaWVudCIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsIm9mZmxpbmVfYWNjZXNzIl0sInN1YiI6InFhLnNwdiIsImF1dGhfdGltZSI6MTcyNzI0MjQzMSwiaWRwIjoibG9jYWwiLCJhbXIiOiJjdXN0b20iLCJqdGkiOiJDMTUzODVBMTc0RTEzNkREODY4QUM4OTI3QjRENEU2MCIsImlhdCI6MTcyNzI0MjQzMSwiZXhwIjoxNzI5ODM0NDMxLCJpc3MiOiJodHRwczovL3BheS1rYWlyb3Muc2lsb2FtaG9zcGl0YWxzLmNvbSIsIm5iZiI6MTcyNzI0MjQzMX0.tgRKmNY88MZk7kZip7Q3OFc9iE6C1EdI-bbG-sfSngg',
  })
  refresh_token: string;

  @ApiProperty({
    example: 'offline_access read write',
  })
  scope: string;
}
