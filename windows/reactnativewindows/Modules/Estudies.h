#pragma once

#include "pch.h"
#include <functional>


namespace EstudiesModule
{
  REACT_MODULE(Estudies);
  struct Estudies final
  {

    REACT_METHOD(Add, L"add");
    double Add(double a, double b) noexcept
    {
      double result = a + b;
      return result;
    }
  };
}