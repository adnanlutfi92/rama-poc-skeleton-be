import { ApiProperty } from '@nestjs/swagger';
import { ILoginResponsePas, ILoginResponsePay } from 'src/services/interfaces/login.interface';

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
export class LoginResponsePasDto implements ILoginResponsePas {
  @ApiProperty({
    example: true,
  })
  status: boolean;

  @ApiProperty({ example: '200' })
  code: string;

  @ApiProperty({ example: '2' })
  organization_id: string;

  @ApiProperty({ example: 'Success login.' })
  message: string;

  @ApiProperty({
    example: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNDdmNWVlNWYtZGZhNy00NDNkLWFjY2EtNWRlZmVkZDc5MGZjIiwidXNlcm5hbWUiOiJpbnRlZ3JhdGlvbi5wcyIsImZ1bGxuYW1lIjoiSW50ZWdyYXRpb24gU3lzdGVtIiwib3JnYW5pemF0aW9uX2lkIjoiOTI4OWRkNTgtZmM5MC00MjI1LTgxZmMtODU4ZGE5NTI2NWE5IiwiZGVwYXJ0bWVudF9pZCI6IjcxOGM5ZmU2LTU1YjMtNDM3OS05NzA5LTliZGZiZjZkNzc3YSIsIm9yZ2FuaXphdGlvbl9uYW1lIjoiU0lMT0FNIEhPU1BJVEFMUyBMSVBQTyBWSUxMQUdFIiwib3JnYW5pemF0aW9uX29mZnNldF9taW51dGUiOjAsImtleWNsb2FrX2F1dGhfY29udHJhY3QiOiI3OTVmOTIzOWNmNGE4ODNjMmZmNDgwNTQxMzc4OWE3NGRlZmE0NDI4NjMyNzEyNmVhNWJlOWQ1NTY3NjE0OTg4ODhhY2RlMGFhMmFjNDJiMzk1YzBhYTM0YmI3NzMzNDdjNzc1YmIxY2EwZDA4M2UxYjgzNDZmYTRmNWFmY2I5MzkyMTA5MzRiZmRhOWY4MDYwMzQ0MWRhNGEwZjk1NzNkMDMwNDYzYWYxZmZmMzIzZDBiNTVlODAwNzdjNjNiMWNkODFhNGFiMTE0ZWI3NDFhNzNlNjI2NTdjNmY2ZmZlNGQyNTQwOWVjYWRjNWM1YzAzMDNmOTkwYzAyNTFmYmU2MGJiN2JiYTM0NTg1ZWM3ZGY1OTY3OTNmOTdlOWZjMWM5YmUyNWM5MWI5YmE3MTY5Zjk5ZWM0Yjg4YTVjMGZkOWJiM2UxN2FkYjc4YWJhYWFmMDEzMTBkYmRlNWZjNDJkYTYzN2RjMzc4Mjg3M2Q5NjQ3NDU5YTc4NzYzMTAwZWM3NjE0NTkyMzkxYTUyYjg5MjRlNWZkNzBlZTRiOGZlNzgyODM3ZDdhNzNjOTQ4MDMwY2QzMjRmYTE4MjJhMWE5ODU0NTk3NWFmYzIxMTRmNWU5MDA3MWQ4NTE2YzMwZmJmNDZmZjdkYzlhMWJkODU5OGY1NGY4ZDFiZDQ2ZDIxODhlMTZkODIyNTViYTJiOWU3NzM4NjE3MWE2ZTIzYzIxODIyOWU1MjhkMTI3MzIwZGJiYWZmNDgzZDgzZjhlNzNmMzBiZDlhMDBiMzBhMTEwOTJkMGJlZWY3YTZjMGNiM2ZhNTc4ZWI0NjJmMzJkYjQzN2JlOTdkYzNkMDQ0YjlmZDI4YmJkYTVkYWJjYWZkNWE4ZmI0NGEzNDg1MjM3MzQ1NjYwYzYyMDcwYjczOGM3YzMxYjAyYTg2ZTg1Yzg5MTA0MzhiMDYzOTMyMDlmNjVmMDFmMzVmMDEyZWNhNGJmOWFkNDBiZjZjZjYyNzM0Y2YwMmFlODZiZjYxYzk1MDhhMTNmYTZiNmFkMGI5ZDAxMDRlMjI2YzI5YmY0N2UyNzM1OTUwZjcxYzk5MmEyMDViYWFjZTg5MzJhNzFlMDBlMzhkZmUyNTM0ODJjNzY2MGE0ODM3OGE1Yzk4ZDgzMjM5ZDExZDA4OWQ4MmVhNDY5YWQ0ZWVhMWI2ZjMxMDNjM2RlODUyMjI1MDliYTBkNWM4YWNlOTIzNGE0YzgyOWQyZjViNDMyNWIxNDVlMDI5N2FlOGI2ZjYxZjExMWMzZDYzMDEwZGE4MDBjYmVhMDgzNWUzMzkwNTYwMzUxNTZhMzM1NDY3OTQ4M2MxZGRkZjhkOWFjZjA4YTMyMzQ3ZDJjZWNhNjFlM2NkODNhNTdmNDBiNWY1ZDYyYmRlMjBmOTEzNWY0YzI5ZWM1Y2Y0NDk1ODQwMjA2ZTk5YWVjZmE4Y2ZiMTU3MGQxMjRkMTkwYmNmNmUyNWExMzA0YmY5ODVjOGM5NDJjYjQ2MGEyYjEyYmQxZGZjYjk5NmZlMGNmODI4Y2M1MmVjYWZiMDM0MzQwNTRlZGVmNGU5ZDViNjM2ZWYwNzM2NDFiMDk1OWZjMGVhZDkyYTk5NjQ2MzgyYTMzOGFlMzY1NTM1NGYzM2U5NmE0MmI4NWU4N2QxZmU1OWQ1ZmIxMTJlY2VhZDBiYmU3Y2UyY2I5ZWM1NWFhNmJiZWNiOTg0NjVhMjExN2VmMTMxYTIwODg1OWI1MzhjMTM4MmY4ODYwYzNiMWJiOTQ3ZTQ1YjdjOTk0YzhlMjZhNWRjZjc2ZTgzYjY4NTI2NTMxM2EyZjBiYTgwZDcwZGE2MGVhOTQ5MTg4ZDE1ZGExMDBmMTliM2Y2ZjYxMzVjZTg0MGQ2Yzg5N2I5MjIzZDY4M2Y0YWUwNTVkNGFjOTg3ZDJhY2MzZDljNjE5Y2MzYjJkMmIyMmU0OTlkOTU5NjE3OTcxMGFiZDVlMWJlNTZkZmZjMzk3MTVlYmJmNjFjZDI1MTFmOGQzYTIwYjEwMDA1OTk3M2E3ZDlkOGI1NTEzZDIyYjZlNTI3MzVjN2M4M2ZjMDg1ZjI2NGUwOWExNzhlMWQ2ZjczZGM0NjI1YzA5MDMzOGViZjYzNzNmNzZlNGM1OGFmNzIxNTFjY2YzYmM4YTIyNTJjZjgzNjQ2ZmQ3Mjc4ZWE5YmQwZWI0OGYwYjMwYmQ3ZWZiN2MyMTk0OTE5ZDhiNDUyMTE0OTUxNDE3ZTYyMGM2MjY0YzE4ODc5MmQyZDk3NTI4MWFkNWMxMGFiMTllNGEwNzAxYTc2NjcwMDBlNTM3YWYwZmZjNTYyM2M1MjlkNzU3NWI5NDg1ZTBhOTZlMmMwOTdkNGRlYzBmZTQ1OTgxMTVjMjRkODNlNDU0NmI3NjhkZjEwZTQ3NGZmNjg4Zjk2ZGYzMTYzOWI4MzU3YTg0OWFhMjUyNzE0ZTM2MzAxMDRjMmFmNWJhMThlM2MwZWQ1NmQ4NGIxNGE1YWRkYmE5NGQyNTRmNGQ4NDI1NmUyYTU0MTRkZWJiYTYxZDcyYjc5MzMwYjU3NWQ4MDRmMjY1MDc3MGY1NGEwZjc2NTZhOTFlODI3YTJiNmVhZTRiNDg4MTA1ODIzYTUyMTM3MmVmNTIwZTk4NzJhNzA5ZjcwNWE0YjYzYTU3MGFlOGEwMjUyNjEyODgzNGI4MjU1Zjk5MDYyYjFhYWNiZGIwMTc2ZTk3YWQzN2UyNmVjYTkwYzk0NDUyYzY2MDUwMWQ4YWFhNjVlMWNhZGIyN2Q1NTQwZjE4NGQzN2YyOThlNDZiOWM4ZDI2ZmM2MTEyODU1N2ZmYzBhOWFjYzFiODk1NmIyN2U3ZjEyNzc4ODE2NDM1YzA0OGI0N2MwOTI3ZWUwODZjYWM0ZjcxMmViMDJlMjg2NWQ4ODNkMTRhNmJkM2M3MDZhZWY0MzgzZTZkMTllNjUyNmY2Mzg1M2I4NmIyNDQ5ZjRkYmE0ZDQxNDc0NmY1NGY0YmMxYzBiNmI5Mzg2OTM1N2I2ZmNmZDdmNWE4NzYzMDljZDg3ZmYxZjkxYzU4NDkzYzU3MGNlMWUwZjE5YzcxMDQ2MTNlODM2NDQzMmYzYTgxNDhkMjM1NTg3MTY3MWVmYzRiZmY1ODI1ZjM5ZjM4MDk3OWQxOWU0MTgxZTUzMjI4MjY3MmMyNjlkMmFiY2Q2NGU2ZGMzYjExZTQ6NzNhZDZiMTM3YWM3OGZmMjI2YzVjZmM3Y2JmZjE3MTkiLCJob3BlIjp7InVzZXJfaG9wZV9pZCI6LTIzLCJvcmdhbml6YXRpb25faG9wZV9pZCI6MiwidXNlcl9ncm91cF9ob3BlX2lkIjpbXX0sImlkZW50aXR5Ijp7InRva2VuX2V4cGlyaXR5IjoiMjAyNS0wOS0yNVQwOTozNzoxMS43NzdaIiwicmVhbG0tcm9sZXMiOlt7InJlYWxtLXJvbGVzLW5hbWUiOiIiLCJwZXJtaXNzaW9uIjpbXSwic2lkZWJhci1tZW51IjpbXX1dfSwiaXNfdW0iOnRydWUsImlhdCI6MTcyNzI1NzAzMX0.zCOml8KOUeXQMH4XOq4S3miKFyEObGEDBebTYgJQANI',
    },
  })
  data: { token: string };
}
