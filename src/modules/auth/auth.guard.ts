import { CanActivate, ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { InvalidTokenException } from './exception/auth.exception';
import { AuthService } from './auth.service';
import { IJWTPayloadPAS } from './interfaces/auth.interfaces';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    private readonly reflector: Reflector,
  ) {}
  canActivate(context: ExecutionContext): Promise<boolean> | boolean | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [context.getHandler(), context.getClass()]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();

    const auth: IJWTPayloadPAS = this.authService.getMe(request);
    if (auth) return true;
    throw new InvalidTokenException();
  }
}
