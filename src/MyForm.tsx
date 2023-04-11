import { FunctionComponent, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { MyEntity } from "./Model";

export interface MyFormProps {
  user: MyEntity;
}
export const MyForm: FunctionComponent<MyFormProps> = (props: MyFormProps) => {
  const { register, reset, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
      console.log("User has changed");
      return props.user;
    }, [props])
  });
  useEffect(() => {
    console.log("Reset");
    reset(props.user);
  }, [props.user]);
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input name="firstName" ref={register} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input name="lastName" ref={register} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" ref={register} />
        </div>

        <div>
          <label>Is developer?</label>
          <input name="isDeveloper" type="checkbox" ref={register} />
        </div>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
