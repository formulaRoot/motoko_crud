export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Profile = IDL.Record({
    'age' : IDL.Nat,
    'bio' : IDL.Text,
    'registration_date' : Time,
    'name' : IDL.Text,
    'premium_user' : IDL.Bool,
  });
  const Result_1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  return IDL.Service({
    'create_profile' : IDL.Func([Profile], [], []),
    'delete_profile' : IDL.Func([IDL.Principal], [Result_1], []),
    'read_profile' : IDL.Func([IDL.Principal], [IDL.Opt(Profile)], ['query']),
    'update_profile' : IDL.Func([Profile], [Result], []),
  });
};
export const init = ({ IDL }) => { return []; };
